# TESTING


## Compatibility

In order to confirm the correct functionality, responsiveness, and appearance:

+ The website was tested on the following browsers: Chrome and Safari

    - Chrome:

    ![Chrome](documentation/chrome.png)

    - Safari:

    ![Safari](documentation/safari.png)



## Responsiveness


+ The website was checked by devtools implemented in Chrome.


+ The website was checked with [Responsive Viewer addon for Chrome](https://responsiveviewer.org/).

    - Index page

    ![Index page](documentation/responsive-index.png)

    - Question:

    ![Question](documentation/responsive-question.png)

    - Summary:

    ![Summary](documentation/responsive-last.png)



## Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Start | | | | | |
| Start | Click on the "Start" button | First random question is displayed | Yes | Yes | - |
| Start | Click on the "Start" button | Question number 1/6 is displayed | Yes | Yes | - |
| Start | Click on the "Start" button | Correct/wrong answers is displayed | Yes | Yes | - |
| Start | Click on the "Start" button | Timeline is displayed | Yes | Yes | - |
| Before/After | | | | | |
| Before/After | Click on the "Before" or "After" button | The correct button turns green | Yes | Yes | - |
| Before/After | Click on the "Before" or "After" button | The incorrect button turns green | Yes | Yes | - |
| Before/After | Click on the "Before" or "After" button | The Correct/Wrong score is increased by 1 | Yes | Yes | - |
| Before/After | Click on the "Before" or "After" button | The image and correct year is displayed in the timeline | Yes | Yes | - |
| Before/After | Click on the "Before" or "After" button | If there are questions left, next button is displayed | Yes | Yes | - |
| Before/After | Click on the "Before" or "After" button | If all questions have displayed, see result button is displayed | Yes | Yes | - |
| Next | | | | | |
| Next | Click on the "Next" button | Next random question is displayed | Yes | Yes | - |
| Next | Click on the "Next" button | Question number is increased by 1 | Yes | Yes | - |
| Result | | | | | |
| Result | Click on the "See results" button | Summary text is displayed | Yes | Yes | - |
| Result | Click on the "See results" button | Retry button is displayed | Yes | Yes | - |
| Retry | | | | | |
| Result | Click on the "Try again" button | Page is refreshed | Yes | Yes | - |


---
## Validator testing
+ ### HTML
  #### Home Page
    - No errors or warnings were found when passing through the official W3C validator.


    ![Home Page HTML Validator](documentation/index-html-val.png)
    
 
    
+ ### CSS
  No errors or warnings were found when passing through the official W3C (Jigsaw) validator:
    

  ![CSS Validator](documentation/css-val.png)
  
 

+ ## LightHouse report

    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.
    
  ### Home page

  ![Home Page Lighthouse](documentation/index-lighthouse.png)

  ### Services page

  ![Gallery Page Lighthouse](documentation/services-lighthouse.png)

  ### Contact page

  ![Contact Page Lighthouse](documentation/contact-lighthouse.png)

  ### Response page

  ![Response Page Lighthouse](documentation/response-lighthouse.png)

---
+ ### Bugs
    - I had some horizontal overflow on the Contact us page. I had forgot to create style for parent containers: width: 100%, display: flex etc.
    - When i tried to make underline for current pages in the navigation bar it didn't because of other code overwriting the style. I had to use an !important tag to make it work.
+ ### Unsolved bugs
    - None.
+ ### Mistakes
    - I added the images and started coding before optimizing them for a website.
    This gave the website a very low score in Performance in the lighthouse-report.
    Afterwards I changed the images to .webp, and that enhanced the result but I also need to resize the images.

---