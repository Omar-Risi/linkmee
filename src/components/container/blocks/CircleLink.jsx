function CircleLink({ mediaLink, imageLink, linkTitle}) {
  return (
      <a href={mediaLink} className="circle-link">
        <div className="image"></div>
        <span>{linkTitle}</span>
      </a>
)}

export default CircleLink;