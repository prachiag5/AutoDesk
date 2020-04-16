// @flow
import React from 'react';
import { Card, Col, Row } from 'antd';
import { withContext } from '~/components/AppContext';
import type { Context } from '~/types/Context';
import CardComponent from '~/components/AppContext/Card';
import apiData from '~/apiDoc.json';
import './list.css';

type Props = {
  appContext: Context,
};

function ListPage( props: Props ) {
  const { appContext: { list } } = props;
  console.log("apiData", apiData);
  return (
    // <div>
    //   <div>
    //   List Page
    //   </div>
    //   <code>
    //     {JSON.stringify( list, null, 2 )}
    //   </code>
    // </div>
    <div className="site-card-wrapper">
      <h2>APIs & Services</h2>
      <p>Access information on how to use Forge APIs and Services</p>
      <br />
      <Row gutter={ [ 16, 16 ] }>
        <Col span={ 8 }>
          <CardComponent title={ apiData[0].title } description={apiData[0].description} intro={apiData[0].intro} developerGuide={apiData[0].guide} apiReference={apiData[0].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[1].title } description={apiData[1].description} intro={apiData[1].intro} developerGuide={apiData[1].guide} apiReference={apiData[1].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[2].title } description={apiData[2].description} intro={apiData[2].intro} developerGuide={apiData[2].guide} apiReference={apiData[2].reference}/>
        </Col>
      </Row>
      <Row gutter={ [ 16, 16 ] }>
        <Col span={ 8 }>
          <CardComponent title={ apiData[3].title } description={apiData[3].description} intro={apiData[3].intro} developerGuide={apiData[3].guide} apiReference={apiData[3].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[4].title } description={apiData[4].description} intro={apiData[4].intro} developerGuide={apiData[4].guide} apiReference={apiData[4].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[5].title } description={apiData[5].description} intro={apiData[5].intro} developerGuide={apiData[5].guide} apiReference={apiData[5].reference}/>
        </Col>
      </Row>
      <Row gutter={ [ 16, 16 ] }>
        <Col span={ 8 }>
          <CardComponent title={ apiData[6].title } description={apiData[6].description} intro={apiData[6].intro} developerGuide={apiData[6].guide} apiReference={apiData[6].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[7].title } description={apiData[7].description} intro={apiData[7].intro} developerGuide={apiData[7].guide} apiReference={apiData[7].reference}/>
        </Col>
        <Col span={ 8 }>
          <CardComponent title={ apiData[8].title } description={apiData[8].description} intro={apiData[8].intro} developerGuide={apiData[8].guide} apiReference={apiData[8].reference}/>
        </Col>
      </Row>
    </div>
  );
}

export default withContext( ListPage );
