'use strict'

const Blog = use("App/Models/Blog")

class BlogController {

    async getIndex({ view, request }) {
        let blogs = await Blog.all()
        return view.render('blogs.index', { blogs: blogs.toJSON() })
    }


    async getCreate({ view, request }) {
        return view.render('blogs.create')
    }

    async getEdit({ view, request }) {
        let id = request.get().id
        let blog = await Blog.find(id)
        return view.render('blogs.edit', { blog: blog })
    }

    async postCreate({ request, response }) {
        let form = request.except('_csrf')
        let blog = new Blog()
        blog.fill(form)
        await blog.save()
        return response.route('BlogController.getIndex')

    }

    async postEdit({ request, response }) {
        let id = request.post().id
        let form = request.except(['id', '_csrf'])
        let blog = await Blog.find(id)
        blog.merge(form)
        await blog.save()
        return response.route('BlogController.getIndex')
    }

    async postDelete({ request, response }) {
        try {
            let id = request.post().id
            let blog = await Blog.find(id)
            await blog.delete()
        } catch (e) {
            e.stack
        }

        return response.route('BlogController.getIndex')
    }
}

module.exports = BlogController
