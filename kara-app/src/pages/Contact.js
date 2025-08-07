import React from 'react'

const Contact = () => {
  return (
    <div>
        <form action="/action_page.php" method="get">
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email Address' />
            <textarea name='query' placeholder='Your message'></textarea>
            <button type='submit' value='Submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact