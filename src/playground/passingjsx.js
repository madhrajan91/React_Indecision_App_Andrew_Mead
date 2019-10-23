const Layout = (props) => {
    return (
        <div>
            <p> header</p>
            {props.children}
            <p> footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1> Page Title </h1>
        <p> This is my page</p>
    </div>
)

ReactDOM.render(<Layout><div>{template}</div></Layout>,  document.getElementById('app'))

