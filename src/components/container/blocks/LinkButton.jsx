function LinkButton({mediaLink, linkTitle}) {
    return (
        <a className="link-button" href={mediaLink}>
            <div className="icon"></div>
            <span>{linkTitle}</span>
        </a>
    )
}

export default LinkButton;