import React, { Component } from 'react'
import { Tree } from '../../components/index'
import './index.css'

var tree = {
    title: "howdy",
    childNodes: [
      {title: "bobby"},
      {title: "suzie", childNodes: [
        {title: "puppy", childNodes: [
          {title: "dog house"}
        ]},
        {title: "cherry tree"}
      ]}
    ]
  };

const treePage = () => {
    return <div className='container' >
        <Tree node={tree} />
    </div> 
}

export default treePage