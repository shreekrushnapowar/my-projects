import React from 'react'

export  function Footer() {
    let footerstyle={
        position:"absolute",
        top:"100vh",
        width:"100%"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </div>
    )
}
