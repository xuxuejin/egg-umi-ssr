import React from 'react';
import { connect, Link } from 'umi';
import { List, Typography, Button } from 'antd';
import Test from 'components/Test'

const listData = [
  'Racing car sprays burning fuel into crowd.',
];

const About = (props) => {
  // const { data } = props;

  return (
    <div>
      <h2>这是关于</h2>      
      <Button type="primary"><a href="/">a 跳转 home</a></Button>
      <Button type="primary"><Link to='/'>Link 跳转 home</Link></Button>
      <Test />
      <List
        bordered
        dataSource={listData}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  )
}
About.getInitialProps = (async (ctx) => {
  const { isServer } = ctx;

  if (!isServer) { return }

  // const res = await get('/joke')
  return { name: 'erere' }
  // await store.dispatch({ type: 'test/test' })
  // const { test } = store.getState()
  // return { test }
});

export default About
