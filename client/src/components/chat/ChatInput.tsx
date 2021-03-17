import React, { useState } from 'react';

interface Props {
  onSend: (message: string) => void;
}
export default function ChatInput(props: Props) {
  const { onSend } = props;
  const [chatInput, setChatInput] = useState('');

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Clear the input box
    setChatInput('');

    // Call the onSend callback with the chatInput message
    onSend(chatInput);
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  return (
    <form className='chat-input' onSubmit={submitHandler}>
      <input
        type='text'
        onChange={textChangeHandler}
        value={chatInput}
        placeholder='Write a message...'
        required
      />
    </form>
  );
}
