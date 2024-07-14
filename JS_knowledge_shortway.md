# How to get input element's user input value?
#1--input element bhitoru user deithiba input value bahar karaiba painee hele 1st "event" use kariba painee huye,
    tapore "dom" use karajayeh.

#2--input element bhitoru jebe value pauchey se value "string" type re thayeh
     if you want convert that string value into number then use "parseInt()".

#3--Always we can get value from input field/input element after event got executed.
    If we get value from input field/input elemnet before event executed then the value can be empty because
    when page gets reload at that time input field is empty so that we get input element value is empty.

#4--Always remember when deal with form element then use "event.preventDefault()" it will not allow if form element's input element has any existing value or
    default value.

#5--When "submit" event gets fire?
    (i) When user clicks on "submit" button i.e. &lt;button type="submit"&gt;&lt;/button&gt;.
    (ii) Wehen user presses the "Enter" key while editing the "input" field &lt;input type="text"&gt; 
         in a form.
    (iii) When a script calls the "form.requestSubmit()" method.   

# html &lt;button>&lt;/button> how react?
```Text
Html "button" default "type" attribute value is submit. so if we are not mentioning 
<button type="submit"></button>,
only we mentioned <button></button> even then it will react as "submit" button.
```    
# "event" and "event.target" what returns?
```Text
1️⃣"event"-- When we are handling any event such as click, submit, mouseover and so on. at that time we can 
            pass "event" as a parameter in that click event/submit event parenthesis then it returns you click on web page which position and it can access properties like "keycode", "clientX", "clientY", "keyvalue".

2️⃣"event.target" -- When we are handling any event such as click, submit, mouseover and so on. at that time 
                    we are passing "event" as a parameter in that click event/submit event's parenthesis. 

                    Then It returns refernce of html element, when we click mouse on any html element or when we do mouse over in a html element at that time it select that html element. After click/mouseover in html element we can access all properties of html element such as "id", "class", "name", "title" etc. using "event.target.id" or "event.target.class" like this we can get value of id, class, name or other properties.

3️⃣"event.type"   -- It tells what type of event such as click/submit/moouseover etc.
```     