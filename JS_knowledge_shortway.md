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