import React from 'react';
import { connect, Link } from 'umi';
import { List, Typography, Button } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Home = (props) => {
  return (
    <div>
      <h2>这是首页suif</h2>
      <Button type="primary"><a href="/about">a 跳转about</a></Button>
      <br />
      <Button type="primary"><Link to='/about'>Link 跳转about</Link></Button>
       <br />
      <Button type="primary"><a href="/home">a 跳转不存在的路由</a></Button>
       <br />
      <Button type="primary"><Link to='/home'>Link 跳转不存在的路由</Link></Button>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  )
}
// Home.getInitialProps = (async ({ store, isServer, history, match, route }) => {
//   if (!isServer) { return }
//   await store.dispatch({ type: 'test/test' })
//   const { test } = store.getState()
//   return { test }
// });
Home.getInitialProps = (async (ctx) => {
  const { isServer, store, history, match, route } = ctx;
  if (!isServer) { return }
  // const rest = await store.dispatch({ type: 'home/changeTitle' })

});

export default connect((({ home }) => ({ title: home.title })))(Home)
