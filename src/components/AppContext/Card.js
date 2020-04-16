// @flow
import React from 'react';
import { Card } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './card-style.css';

type Props = {
    title: '',
    description: '',
    intro: '',
    developerGuide: '',
    apiReference: ''
  };

function CardComponent( props: Props ) {
  const {
    title, description, intro, developerGuide, apiReference,
  } = props;
  return (
    <Card 
      title={ title }
      hoverable
      bordered
      className="card-generic"
    >
      <div>
        {' '}
        {description}
        {' '}
      </div>
      <br />
      <Link to="/developer/en/api/dummy1/intro" class="card-link">
        Intro:
        <RightOutlined />
      </Link>
      <br />
      <Link to="/developer/en/api/dummy1/guide" class="card-link"> 
        Developer's Guide: 
      <RightOutlined /> 
      </Link>
      <br />
      <Link to="/developer/en/api/dummy1/reference" class="card-link"> 
        Api's Reference: 
        <RightOutlined /> 
      </Link>
    </Card>
  );
}

export default CardComponent;
