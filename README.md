# COUNTING THE NUMBER OF OBJECTS IN JSON FILE

How it looks in general:

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/44007154-5de527b4-9e99-11e8-8bea-aa6f91fd5996.png" >
</p>

There is one area in which the user can drop the file or add it with the button.
That file can be only a JSON file, or there will be a mistake.
If everything is ok - user will see the text of the file and the count of objects inside it.
After that user can discard all changes and add another one file.
You can see this process in pictures below.

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/44007220-2c6ffaaa-9e9a-11e8-9e67-94609f0c6962.png" >
</p>

---------------------------------------------------------------------------------------

<p align="center">
    <img src="https://user-images.githubusercontent.com/18067700/44007273-eb119e78-9e9a-11e8-8b6d-296c9dc0e118.png" >
</p>

---------------------------------------------------------------------------------------

 * Drag and drop realized by react-file-drop component.
 * Add file button realized by general input with type "file".
 * JS File Reader helps to read text from file.
 * Object counting realized by JS JSON parser (supports ie >= 9)


