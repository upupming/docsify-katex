# PI Processbook Overview

PI Processbook is the standard tool used to visualize trends of data recorded in the PI System. We are able to create trends, XY plots, SQC Charts, graphics and more to help visualize our data. 

This page is an overview of the functionality provided and will help to point you towards more resources for further learning. 

## Initial Setup

If this is your first time using Processbook, it will open with the default demo book. You do not want to use this, as it does not have any or our data in it. 

Instead, you will want to open up the following file: `P:\SCZ1 Admin.PIW`

This document contains all trends that have been built for the Zhuhai plant that are available for general use. 

> There is security implemented here by restricting the folders that users can view. If you are not able to open up a particular display, it is because it is located in a folder that the user does not have access to. Using this single display makes ongoing maintenance for all users simpler, than maintaining multiple displays.

For your initial setup you will want to set some defaults that will make your work with PI easier:

1. Go to `Tools > Preferences` and use the `General` tab to set the `P:\SCZ1 Admin.PIW` book as your default on startup.
2. On the `Table of Contents` tab, change the `Default View` from Notebook to Outline.
3. On the `Trend` tab, change the `Plot Scale Start` from `'*-8h'` to `'*-12h'`. (We use a default of 12h because shift length is 12 hours.)
4. Click Apply and OK to accept your changes to the Preferences.

If you want to setup some keyboard shortcuts you can find those under `View > Shortcuts`.

Typical shortcuts that I set are:

* **Tools:Build** `Ctrl + B`
* **Tools:Run** `Ctrl + R`
* **View:Trend Cursor** `Ctrl + T`
* **Draw:Trend** `Ctrl + G`

Feel free to set other keyboard shortcuts to make your time with Processbook more efficient.

## Viewing Data with Trends

Viewing trends is very intuitive in Processbook. Trends are the main backbone of analysis with OSIsoft. They are the first step to understanding your data before you go into more analytical methods. 

Look around the main `P:\SCZ1 Admin.PIW` processbook and open any display that you have access to. 

Once you are on a display you can double click a trend and it will blow up to full screen. 
 
![trend](./images/pb_trends.png)

Double click on either of the above trends to display them full screen.

![trend](./images/pb_trend.png)

 Once displayed full screen, you can look at the current time range displayed. Use the `+` and `-` icons at the bottom to zoom  in and out of the time range. 

You can also drag and drop a zoom rectangle on the trend to zoom in on a specific part. 

`Ctrl + T`, if defined above, will put a trend cursor on the screen that you can drag back and forth. You can also get a trend cursor using the Trend icon from the toolbar or putting your cursor to the left side of the trend until it changes to a trend cursor and then clicking and dragging. 

## Data Details and Annotations
 
Any time you want to look at the raw data or look at rollup summaries of data the best way to do that while in Processbook is with the `Details and Annotations` Pane. 

You can bring up the Details and Annotations pane by right clicking anywhere on a display and choosing `Show Details and Annotations`. This brings up the below pane on the right-hand side of the screen.  

![details](./images/pb_details.png)

The data table lists all visible data points for the selected tag in the selected trend. You can choose in the dropdown, any of the available tags to look at their data. 

### Annotations
 
When you select a data point in the table, you can then add annotations to it to describe the point or other information that should be associated with that particular observation. When adding an annotation, just type in the box at the bottom. Once you are happy with your annotation, click Save, and it will be saved to the point. You can have as many annotations associated with an observation as you would like. 
 
For example, you could include: inputters name, reason for it being off-spec, related data file/image, etc.

### Point Statistics

At the top of the details pane, in Option, you can select from Data, Statistics, and Point Attributes. 

Selecting `Statistics` will bring you to a view that shows summary statistics of the visibile data and selected tag.

![stats](./images/pb_stats.png)

These statistics are variable and change with the currently viewed data. Also, depending on the type of plot/trend you are looking at, there are different statistics available. 

If you are using Processbook to build an X-Y plot (Scatter Plot) the statistics returns the best-fit line parameters. However, in a simple trend, statistics returns summary univariate stats.

## PI Time

PI has a very powerful implementation to deal with time and allows us to search for and input time in many different formats. This section is to help you know what is required when inputting times. 

Times can be input in the Trend definitions and also on a display in general to reset all trends to a specific time. 

Check out the below Time toolbar:

![time](./images/pb_timetools.png)

Specifically this one: ![time chooser](./images/pb_timerange_icon.png)

It brings up the below dialog: 

![time chooser](./images/pb_timerange.png)

These are the places that you will be inputting times. But what we want to know is the format that is required to input time. 

The default time for us is:

`mm/dd/yyyy hh:mm:ss`  Though this format is not the required part.

Below is a list of possibilities and how they get resolved:

* `7/14` resolves to `7/14/current year 00:00:00` Leaving out the year resolves to the current year. If you use it for a date that has not occurred in the current year yet, you will be inputting a date in the future. 
* `m/dd h` is enough to resolve the date at the hour specified. You can use military time to resolve to PM values.
* `*` resolves to current time

Of course you can use longer variations of above for times. These examples are simply the minimum required to resolve to a specific time. 

### Using star in times

The star represents relative time, with the star itself specifically referring to current time. 

+ `*`: now
+ `*-12h`: 12 hours ago
+ `*-20m`: 20 minutes ago

The possibilities for letters in the relative times are: 

* s: seconds
* m: minutes
* h: hours
* d: days

If you want longer times you have to use large numbers of days. Also you cannot combine them together or use decimals. `**-1.5d` will not work. Instead you should use `*-36h`.

## Building Trends

Since Processbook's main purpose is to display data for us, we need to learn how to define a trend. 

![toolbar](./images/pb_toolbars.png)

The above image is the toolbar that defaults in PI Processbook. There are a lot of icons, but let's focus on the below toolbar for starters. 

![toolbar-tools](./images/pb_tools.png)

On this toolbar we have:

* Pointer: This is run mode
* Hammer: This is build mode to define trends
* Trend: Click this one after the hammer and you can click and drag a new trend.
* Many others to play with

Check the official documentation in Processbook or in [OSIsoft Live Library](https://livelibrary.osisoft.com) for documentation on the other functions. We are just going to look at creating a simple trend with multiple data points on it. 

1. Click the hammer to enter Build mode.
2. Click the trend icon or `Ctrl + G` as defined above to enter Trend building mode.
3. Click and drag on your display to create a trend. (This will define the size of your display on the page. It can be changed later.)
4. The below dialogue will pop up to allow you to define what is in the new trend. 

![trend-dialog](./images/pb_define_trend.png)

In the above dialog you will need to fill out which tags you would like to have on the display. 

### Tag Search

Click "Tag Search" to bring up the below window to search for tags. 

![tag-search](./images/tag_search.png)

Simply clicking search will find every point that you have access to on the data archive. You can look through everything to find your desired point. However, the preferred way to find data is to search for it. 

You can search using this dialog primarily using either `Tag Mask` or `Descriptor`. 

> Note: When searching in PI for anything you must use the `*` character to stand for any matches. Without it you will only find exact matches to what you typed in. This is a source of confusion to many, so please use `*`'s whenever you search. 

Some examples of `*` search are shown below: 

* `'*'`: returns everything
* `3*.PV`: returns all 3000 area tags with PV at the end.
* `3PV3043*`: returns all tags that start with 3PV3043
* In descriptor `*plow mixer*` Returns all tags with plow mixer in the descriptor
* In descriptor `plow mixer*`: This looks the same, but will only return descriptors with plow mixer as the first 2 words.

Once you have found tags select them (you can hold `Ctrl` and select multiple) and click OK. The tags will then be brought back to the trend dialog for further customization.

### Trend Definition

Now that we have tags we need to finish the configuration:

* Each tag can have scale defined individually. `Scale` accepts: Auto, Database, and numbers. Database pulls the defaults from the Data Archive. Your PI Admin can change those for you. 
* Plot Time defines the default time axis scaling. Please use a multiple or factor of our 12-hour shifts. Relative times must also be defined with stars. 
* Clicking on Display format allows you to choose the other extra information that gets defined along with the time-series. If you are confused why the tag names are not displaying, you can set them to display here. 

![display format](./images/pb_define_trend_format.png)

Once your trend is defined, just click OK and you are set to go!

### Edit an existing trend

If you want to edit an already existing trend, you can simply double-click the trend while in Build mode.