import query from '../utils/query'
//转义数据库语句
import eacape from '../utils/eacape'

class ArticleModel {
    async getAllArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY createTime DESC")
    }
    async addArticle(){
        return await query("INSERT INTO ARTICLE SET title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''")
    }
    async getOneArticle(id){
        return await query(`SELECT * FROM ARTICLE WHERE id=${id}`)
    }
    async updateArticle(id,{title,tags,content,isPublished}){
        return await query(eacape`UPDATE ARTICLE SET title=${title}, tags=${tags},content=${content} WHERE id=${id}`)
    }
    async deleteArticle(id){
        return await query(eacape`DELETE FROM ARTICLE WHERE id=${id}`)
    }
    async publishArticle(id){
        return await query(eacape`UPDATE ARTICLE SET publishTime=NOW(), isPublished=1 WHERE id=${id}`)
    }
    //获取书本信息
    async getAllBooks(){
        return await query(`SELECT * FROM RD_LIST`)
    }
    async addBook({name, author, score}){
        return await query(eacape`INSERT INTO RD_LIST SET name=${name},author=${author},score=${score}`)
    }
    async updateBook(id, {name, author, score}){
        return await query(eacape`UPDATE RD_LIST SET name=${name},author=${author},score=${score} WHERE id=${id}`)
    }
    async deleteBook(id){
        return await query(eacape`DELETE FROM RD_LIST WHERE id=${id}`)
    }
}
export default new ArticleModel() 