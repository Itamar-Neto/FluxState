function NavIcons({ url, src, alt }) {
    return (
        <>
            <a href={url}>
                <img src={src} alt={alt} className="w-15 h-15 " />
            </a>
        </>
    )
}

export default NavIcons;