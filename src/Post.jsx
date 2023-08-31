import styles from './Post.module.css'

function Post(props){

    const tagList = props.tags;
   
    return (<>
      
        <div className= {styles.Card}>
            <span className = {styles.Title}>{props.title}</span>
            <br/>
            <span className = {styles.Post}>{props.post}</span>
            <br/>
            <div className={styles.TagList}>
            {
                tagList.map((e)=>{
                    return <span className = {styles.Tag}>{e}</span>
                })
            }
            </div>
            

          
        </div>
    
    </>)
}

export default Post