import React from 'react'
import {  RadioGroup } from '@fluentui/react-northstar'

class RadioGroupVerticalExample extends React.Component {
  state = {
    selectedValue: '',
    inputTabIndex: '-1',
  }

  render() {
    return (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <RadioGroup
          vertical
          defaultCheckedValue="prosciutto"
          items={this.getItems()}
        />
      </div>
    )
  }

  getItems() {
    return [
      {
        name: 'pizza',
        key: 'Capricciosa',
        label: 'Capricciosa',
        value: 'capricciosa',
      },
      {
        name: 'pizza',
        key: 'Prosciutto',
        label: 'Prosciutto',
        value: 'prosciutto',
        disabled: true,
      },
      {
        name: 'pizza',
        key: 'Pepperoni',
        label: 'Pepperoni',
        value: 'pepperoni',
      }
    ]
  }
}

export default RadioGroupVerticalExample
