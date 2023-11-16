export class formPost{
    constructor(idForm, idTextarea, idUlPost){
       this.form = document.getElementById(idForm);
       this.textarea = document.getElementById(idTextarea);
       this.ulPost = document.getElementById(idUlPost);
       this.addSubmit();
    
    }

    onSubmit(func){
        this.form.addEventListener('submit',func)
    }

    addSubmit(){
        const handleSubmit = (event) => {
            event.preventDefault();
           
            const newPost = document.createElement('li');
            newPost.classList.add('post');
            newPost.innerHTML = `
            <div class="postUser">
            <div class="imgUserPost">
            </div>
                <div class="nomeHora">
                    Fernanda Silvino
                   <!-- <p> 19:00</p>  -->
                </div>
            
        </div>
       
        <p>${this.textarea.value}</p>

        <div class="btnPosts">
            <button type="button" class="curtir"><img src="./assets/img/heart.svg" alt="Curtir">Curtir</button>
            <button type="button" class="comentario"><img src="./assets/img/comment.svg" alt="Curtir">Comentar</button>
        </div>
            `;
            this.ulPost.append(newPost);

        }
        this.onSubmit(handleSubmit);
    }

}

const postForm = new formPost('formPost', 'textarea', 'posts')