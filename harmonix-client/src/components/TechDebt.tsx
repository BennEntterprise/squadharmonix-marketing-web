import React from 'react'

const TechDebt = () => {
  return (
    <div>
      <h1>Academy Site</h1>
      <h4>General</h4>
      <ol>
        <li>Optimize for Mobile</li>
        <li>
          Replace Squad brand in nav bar with an actual logo on transparancy,
          not a screen clipping (this will eliminate the box)
        </li>
        <li>
          Clean up nav bars: <br />
          <ul>
            <li>
              Move Nav bar items to the right, as of now they are up to the left
              against the site brand.
            </li>
            <li>Adjust color schemes</li>
          </ul>
        </li>
        <li>Get namecheap 'harmonics' redirected to 'harmonix'</li>
        <li>Get namecheap to point at the heroku production deployment</li>
      </ol>
      <hr />
      <br />
      <br />
      <h4>This is Squad</h4>
      <ol>
        <li>Buttons in the Groups (Squad and Harmonix) shood be same width.</li>
        <li>
          Find Better Assets for Socials (Need to be on transparant
          backgrounds). Best if we can find a version directly from the
          respective site's 'brand asset' pages.
        </li>
      </ol>
      <hr />
      <br />
      <br />
      <h4>Contact/Audition</h4>
      <ol>
        <li>Link this contact form to mailchimp or info@harmonix.com</li>
        <li>Get the submit/Checkbox Centered</li>
        <li>Fix whitespace gaps between the contact form and the images.</li>
        <li>
          Replace Laura Jean Brand Asset with higher quality(not just screen
          clipping from mockups)
        </li>
        <li>Replace 8th note icons in offerings</li>
        <li>Tidy up spacing fo the elements.</li>
      </ol>

      <h4>"What is Squad"</h4>
      <ol>
        <li>Add vertical bars between the colored headings.</li>
        <li>
          Do some addditional work on font sizes (can be tweaked a little.)
        </li>
      </ol>
      <h4>"Meet the Squad"</h4>
      <ol>
        <li>Work on resizing the photos either:</li>
        <ul>
          <li>
            Crop them to the same dimensions/aspect to start with(preferred){' '}
          </li>
          <li>OR </li>
          <li>Apply custom code work to each photo (not preferred) </li>
        </ul>
        <li>
          Get the player to show a specified next song (rather than letting the
          algo run its own analysis)
        </li>
        <li>Position Spotlights/shadows on the squad</li>
        <li>
          Do a bit more spacing/positioning of Titles after photos have been
          refined.
        </li>
      </ol>
      <h4>Meet the Teachers</h4>
      <ul>
        <li>Crop Teacher Photos to Size, readjust Margins</li>
        <li>Format to be mobile friendly</li>
        <li>Emphasis on the teacher name (larger, bold weight)</li>
      </ul>

      <h1>Artist Page</h1>
      <ul>
        <li>Spacing on Headlines</li>
        <li>About Us: Adjust Left/Right banner sizings</li>
        <li>Add the "Click here for Squad Academy" Bubble</li>
        <li>Resize teh membner photos so they are similar size.</li>
        <li>Get photo for Johanna</li>
        <li>Add links for </li>
        <li>Move Members into a line on mobile (bootstrap integration)</li>
      </ul>
    </div>
  )
}

export default TechDebt
