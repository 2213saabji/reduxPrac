import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearAllUsers } from '../store/slices/UserSlice'


export default function DeleteAllUser() {
  const dispatch = useDispatch()
  const deleteUser = () =>{
    dispatch(clearAllUsers());
  }
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={()=>{deleteUser()}}>Clear users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform:capitalize;
    background-color:#db338a;
    margin-top:2rem;
  }`
