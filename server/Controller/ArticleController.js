import Article from '../model/ArticleModel'

class ArticleController {

    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticle(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticle(id)
        ctx.body = res
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticle(id)
        ctx.body = res
    }
    //获取阅读列表
    async getReading(ctx){
        const res  = await Article.getAllBooks()
        ctx.body = res
    }
    async addBook(ctx){
        const book = ctx.request.body
        console.log(book)
        const res = await Article.addBook(book)
        ctx.body = res
    }
    async editBook(ctx){
        const id = ctx.params.id
        const book = ctx.request.body
        ctx.body = await Article.updateBook(id, book)
    }
    async deleteBook(ctx){
        const id = ctx.params.id
        ctx.body = await Article.deleteBook(id)
    }
    async briefs(ctx){
        ctx.body = await Article.Briefs()
    }
    async updateMe(ctx){
        const id = ctx.params.id
        ctx.body = await Article.UpdateMe(id)
    }
}
export default new ArticleController() 