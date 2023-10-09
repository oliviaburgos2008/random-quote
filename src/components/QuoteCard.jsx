
import "./QuoteCard.css"

const QuoteCard = ({quote, handleChangeQuote}) => {
    



  return (
    <section className="quoteCard">
        <article className="quoteCard__container">
 
<img src="/title.svg" alt="" />
 
<p className="quoteCard__phrase">{quote.phrase}</p>
 

<button className="quoteCard__btn" onClick={handleChangeQuote}><i className='bx bx-shuffle bx-md'></i></button>
        </article>
     <div className="quoteCard__sphere">
     <img src="/sphere.png" alt="" />
        <footer className="quoteCard__footer">
        
            Author: {quote.author}
        </footer>
    
     </div>
     

    </section>
  )
}
export default QuoteCard