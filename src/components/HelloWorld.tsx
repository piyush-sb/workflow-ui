import React from 'react'
export interface IHelloWorld {
  text: string
}
export const FlogiksTest = ({ text }: IHelloWorld) => {
  return <div className="text-wrapper"><div className="text">This is test text: {text}</div></div>
}