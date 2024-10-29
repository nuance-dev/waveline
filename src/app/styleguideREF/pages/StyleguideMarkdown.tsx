import {FunctionComponent} from 'react';
import {StyleguideTitle} from '@/styleguide/components/StyleguideLayout';
import {Markdown} from '@/components/Markdown/Markdown';

const MARKDOWN_EXAMPLE = `
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## Headers (Underline)

Underline H1
=============

Underline H2
-------------

### Characters

----

- ~~Strikethrough~~
- *Italic 1*, _Italic 2_
- **Bold 1**,  __Bold 2__
- ***Bold Italic 1***, ___Bold Italic 2___

### Blockquotes

> Blockquote - [Link]()

### Links

- [Link](http://localhost/)
- [Link with title](http://localhost/ "link title")
- <https://github.com>

### Code Blocks (multi-language) & highlighting

#### Inline code

Lorem ipsum \`console.log("Foo bar")\` dolor sit

#### Code Blocks (Indented style)

Indented 4 spaces, like \`<pre>\` (Preformatted Text).

    = =+-- . .
    . =+ -<+ +>
    = =+-- . .
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### Javascript

\`\`\`tsx
interface Props = {din?: 'don', zoo: number}

export const Foo: FunctionComponent<Props> = ({din, ...foo}) => {
  console.log('Beep');

  return <div {...foo} some='thing' num={4}>
    <span>bar {din}</span>
  </div> // Don
}
\`\`\`

#### HTML

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
\`\`\`

### Images

Image:

![](https://placehold.co/100x100)

### Lists

#### Unordered list (-)

- Item A
- Item B
     
#### Unordered list (*)

* Item A
* Item B

#### Unordered list (plus sign and nested)
                
+ Item A
+ Item B
    + Item B 1
    + Item B 2

####    Ordered list
                
1. Item A
    1. Item A
    1. Item B
1. Item B
1. Item C
                
----
                    
### Tables
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
                
----

#### HTML entities

&copy; &  &uml; &trade; &iexcl; &pound;

##Markdown extras

### Task list

- [x] Task 1
- [x] Task 2
- [ ] Task 3
    - [ ] Task 3-1
    - [ ] Task 3-2
    - [ ] Task 3-3
- [ ] Task 4
    - [ ] Task 4-1
    - [ ] Task 4-2
`;

export const StyleguideMarkdown: FunctionComponent = () => (
  <>
    <StyleguideTitle>Markdown</StyleguideTitle>

    <Markdown>{MARKDOWN_EXAMPLE}</Markdown>
  </>
);
