import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
                <Menu.Item name='Home' active={activeItem === 'home'} onClick={() => { alert('Press sidebar to enter home page');}} />
          <Menu.Item
            name='Account'
            active={activeItem === 'account'}
                    onClick={() => { alert('Hello, user');}}
          />
          <Menu.Item
            name='Market'
            active={activeItem === 'market'}
                    onClick={() => { alert('Press sidebar to enter market');}}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Logout'
              active={activeItem === 'logout'}
                        onClick={() => { alert('Logged out! Please come again');}}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}