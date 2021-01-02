/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Display Current Time
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  16:12:18
//                 :  16:12:19
//                 :  16:12:20
//                 :  16:12:21
//                 :  Ctrl + C To Close It
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function current_time() 
{
    this.currentime = new Date();
    this.hours = this.currentime.getHours();
    this.minutes = this.currentime.getMinutes();
    this.seconds = this.currentime.getSeconds();
}

current_time.prototype.run = function ()
{
    setInterval(this.update.bind(this), 1000); 
};

current_time.prototype.update = function () 
{
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
current_time.prototype.updateTime = function (secend) 
{
    this.seconds += secend;
    if (this.seconds >= 60)
    {
        this.minutes++;
        this.seconds = 0;
    }

    if (this.minutes >= 60)
    {
        this.hours++;
        this.minutes = 0;
    }

    if (this.hours >= 24)
    {
        this.hours = 0;
    }
};

var clock = new current_time();
clock.run();