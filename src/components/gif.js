const Gif = ({ title, url }) => {
    return (
        <>
            <p>{title}</p>
            <img src={url} alt={title} />
        </>
    )
  }
  export default Gif;