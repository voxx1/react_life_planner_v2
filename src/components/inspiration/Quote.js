import classes from "./Quote.module.css"
import MainHeader from "../UI/MainHeader";
import { useEffect, useState } from "react";

const Quote = () => {


    const [quoteInfo, setQuoteInfo] = useState({
        text: null,
        author: null,
        shareLink: null
    })

    const [isLoading, setIsLoading] = useState(null);



    useEffect(() => {
        const fetchQuote = async () => {
            setIsLoading(true)
            const response = await fetch("https://quotes.rest/qod?language=en");
            const responseData = await response.json();
            const QOD = responseData.contents.quotes[0].quote
            const QODauthor = responseData.contents.quotes[0].author
            const QODlink = responseData.contents.quotes[0].permalink

            setQuoteInfo({
                text: QOD,
                author: QODauthor,
                shareLink: QODlink
            })
            setIsLoading(false)
        }

        fetchQuote();

    }, [])


    return (
        <>
            <MainHeader />
            <div className={classes.quote_form}>
                <h1>Inspiring Quote of the day</h1>
                {isLoading ? <p style={{ color: "white", textAlign: "center", fontSize: "20px", marginTop: "20px" }}>Just a second, your quote is loading!</p> : <>
                    <h2>{quoteInfo.text}</h2>
                    <h3>{quoteInfo.author}</h3>
                    <a href={quoteInfo.shareLink} rel="noreferrer" target="_blank"><input className="spending-form-button" type="button" value="Share link to quote" /></a>

                </>}


            </div>
        </>

    )
}

export default Quote