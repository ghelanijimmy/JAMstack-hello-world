import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <article>
      <h1>Hi Everyone</h1>
      <p>My name is <strong>Jimmy Ghelani</strong></p>
      <p>My journey into the coder's world began 4-6 years ago when i first started out as a web content manager. Not knowing what I'm really doing, I started to teach myself how to code by taking courses online and trying to acquire knowledge from whatever resourse I could get my hands on.</p>
      <p>Now, 4-6 years later, I have set my career path in the world of Web Development, and I will never look back. I am looking forward to seeing how my skills can increase and evolve and learn as much as I can to be the best that I can be at doing what I love to do. I am currently a front-end developer with a little bit of dabbling in full-stack development. I hope to become great at javascript full-stack development.</p>
      <p>Some useful links:</p>
      <ul>
        <li>Github: <a href="https://github.com/ghelanijimmy" target="_blank">gitHub</a></li>
        <li>LinkedIn: <a href="http://linkedin.com/in/ghelanijimmy" target="_blank">LinkedIn</a></li>
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </article>
  </div>
)

export default IndexPage
