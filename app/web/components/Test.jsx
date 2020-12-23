import React, { useEffect } from 'react';
import { get } from 'utils/request';

const Test = () => {
  useEffect(() => {
    getInitDate()
  }, []);

  const getInitDate = async () => {
    const rest = await get('/joke');

  }

  return (
    <div>我是一个测试组件</div>
  )
}

export default Test;