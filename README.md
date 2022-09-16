# Dime Assessment Mockup - Daniel Geiger

Hi! First I want to say thanks for giving me the opportunity to apply and take this assessment. I had a lot of fun with this mockup!

## Running the mockup

The mockup is a npm package made using `create-react-app`. You should be able to clone the repo, install any ependencies and then enter `npm start`. This should bring up the interactive mockup.

## Assumptions

In making the mockup, I had to make several assumptions that are worth pointing out.

- The first was how to construct the mockup. The instructions didn't specify what tools and framework I was intended to use. I was having some issues with my dev environment trying to build with React Native. After talking with Dan, he said I could just use React, so that's what I used.
- Next was the level of detail to include in the mockup. I wasn't sure if this was just a layout mockup or what functionality was intended. I decided to build any functionality I could reasonably infer from the image. However, I may have gotten some of the finer points wrong.
  - The star ratings, review count, price, and sale price are all based on the props that are passed to the components. The saving percentage note is also conditionally rendered based on whether or not the item is on sale.
  - The "Add to Bundle" buttons will add the cost of the item to the Bundle Price. I wasn't sure if the button should convert to a "Remove from Bundle" once the item was added or if it should remain unchanged so users can add multiple of the same item to their bundle. I opted for the second option.
  - I also wasn't sure what bundle prices the user should reach to hit higher tiers on the savings percentage. Since they reach the 10% tier when they reach $100, I decided to go with the following associations: 15%: $150; 20%: $200; and 25%: $150. Modifying these would be easy.
- I also wasn't sure if you wanted me to mock the layout of the header with all the system icons. I decided that would probably be outside of the scope the mockup.

## Improvements

I unfortunately didn't have as much time to work on this mockup as I would have liked. As a result, there are several things I could have done to improved in the code, but opted not to do in the interest of time.

- Replace the less-than sign with an actual image for the page back button.
- Further improve spacing and font selection to match the image more closely.
- Improve design for scalability and better mobile-first design.
- Improve the CSS through better organization and class name revisions
- Implement the bar chart as a React component
- Make the code more DRY in several spots through refactoring.
- Make the code easier to navigate by implementing several helper functions

## Conclusion

Thanks again for this opportunity. This has been a lot of fun and I hope to hear from you soon!
