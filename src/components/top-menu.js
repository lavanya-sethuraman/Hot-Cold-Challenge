import React from 'react'
import { Menu,Button, Modal, Header } from 'semantic-ui-react'
import '../index.css';

export default function TopMenu(props) {

  return (
    <Menu secondary>
      <Menu.Item name='What'>
        <Modal size='small' trigger={<Button basic>What?</Button>} closeIcon='close'>
          <Header content='What do I do?' />

          <Modal.Content>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
            <ul>
              <li>I pick a random secret number between 1 to 100 and keep it hidden. </li>
              <li>You need to guess until you can find the hidden secret number. </li>
              <li>You will get feedback on how close ("hot") or far ("cold") your guess is. </li>
            </ul>
            <p>So,Are You Ready?</p>
          </Modal.Content>

        </Modal>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='New Game'><Button basic onClick={props.onClick}>+New Game</Button> </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

