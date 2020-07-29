import React from 'react';

function ButtonLink(props) {
//props => { className: "oque alguém passar, href: "/" }
console.log(props)
  return (
    <a className={props.className} href={props.href}>
      Novo link
    </a>
  )
}

export default ButtonLink;