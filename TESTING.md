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
|  | Click on the "Start" button | First random question is displayed | Yes | Yes | - |
|  | Click on the "Start" button | Question number 1/6 is displayed | Yes | Yes | - |
|  | Click on the "Start" button | Correct/wrong answers is displayed | Yes | Yes | - |
|  | Click on the "Start" button | Timeline is displayed | Yes | Yes | - |
| Before/After | | | | | |
|  | Click on the "Before" or "After" button | The correct button turns green | Yes | Yes | - |
|  | Click on the "Before" or "After" button | The incorrect button turns green | Yes | Yes | - |
|  | Click on the "Before" or "After" button | The Correct/Wrong score is increased by 1 | Yes | Yes | - |
|  | Click on the "Before" or "After" button | The image and correct year is displayed in the timeline | Yes | Yes | - |
|  | Click on the "Before" or "After" button | If there are questions left, next button is displayed | Yes | Yes | - |
|  | Click on the "Before" or "After" button | If all questions have displayed, see result button is displayed | Yes | Yes | - |
| Next | | | | | |
|  | Click on the "Next" button | Next random question is displayed | Yes | Yes | - |
|  | Click on the "Next" button | Question number is increased by 1 | Yes | Yes | - |
| Result | | | | | |
|  | Click on the "See results" button | Summary text is displayed | Yes | Yes | - |
|  | Click on the "See results" button | Retry button is displayed | Yes | Yes | - |
|  | | | | | |
|  | Click on the "Try again" button | Page is refreshed | Yes | Yes | - |


---
## Validator testing
+ ### HTML
    - No errors or warnings were found when passing through the official W3C validator.


    ![Home Page HTML Validator](documentation/html-val.png)
    
 
    
+ ### CSS
  No errors or warnings were found when passing through the official W3C (Jigsaw) validator:
    

  ![CSS Validator](documentation/css-val.png)
  
 
 + ### JSHint
  No errors when passing through the JSHint
    

  ![CSS Validator](documentation/jshint-val.png)
  

+ ## LightHouse report

    - Using lighthouse in devtools I confirmed that the website is performing well.
    

  ![Lighthouse](documentation/lighthouse.png)


---
+ ### Bugs
    - The function revealTimeline didn't work. That was because inside of the parantheses i didn't write correctYear. It is needed to define what the the function is looking for.
    - I tried to apply .hide to .timeline section. It didn't work because .hide was above .timeline in the css code.
+ ### Unsolved bugs
    - None.
+ ### Mistakes
    - When I was done with the TESTING file I started with the README. When I was almost done I noticed that I'd been overwriting everything in the TESTING file. I had pushed to GitHub earlier so I could get almost everything I wrote from there.
---