$(document).ready(function() {
    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
    // put your options and callbacks here
    	eventRender: function(event, element){
	    	if (event.title == "GABA Lesson - NA"){
	    		return false;
	    	}
	    },
    	header: {
    		left: 'prev',
    		center: 'today month,agendaWeek',	
    		right: 'next',
    	},
    	defaultView: 'agendaWeek',
    	slotDuration: '01:00:00',
    	weekends: false,
    	minTime: "10:00:00",
    	maxTime: "22:00:00",
    	allDaySlot: false,
    	contentHeight: "auto",
    	eventColor: "#060708",
    	googleCalendarApiKey: 'AIzaSyBdqGj_F2h02H5MV6PqjfuTzpee2KEJYQM',
    	eventSources: [
            {
                googleCalendarId: '2t9c26ch825qeeukm0guu74c44@group.calendar.google.com',
                className: 'eoc-calendar',
            },
            {
                googleCalendarId: '04ubl8ju5lr7osddqp49pveqd3glfioa@import.calendar.google.com',
                className: 'gaba-calendar',
            }
    	]
    })
});