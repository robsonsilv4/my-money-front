import React, { Component } from 'react';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="RS 10"
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="RS 10"
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="RS 0"
              text="Valor consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
