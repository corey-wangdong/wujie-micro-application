import React from 'react'

interface IProps {
  changeActive: () => void;
}

function Home(props: IProps) {
  const { changeActive } = props;
  return (
    <div onClick={changeActive}>Home</div>
  )
}

export default Home