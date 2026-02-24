$(document).ready(function() {
    
    // Show/Hide Details button click event
    $('.btn-details').click(function(e) {
        e.preventDefault();
        
        // Get the current event container
        var $event = $(this).closest('.event');
        
        // Get the event title using traversing and text() method
        var eventTitle = $event.find('h3').text();
        
        // Display alert with event title
        alert('Selected Event: ' + eventTitle);
        
        // Toggle the event details using slideToggle effect
        $event.find('.event-details').slideToggle(400);
        
        // Change button text using text() method
        if ($(this).text() === 'Show Details') {
            $(this).text('Hide Details');
        } else {
            $(this).text('Show Details');
        }
        
        // Change background color of the selected event using css() method
        // Toggle the 'active' class for better styling
        $event.toggleClass('active');
        
        // Highlight the event title (h3 element)
        // Using traversing method find() to locate h3
        var $heading = $event.find('h3');
        if ($event.hasClass('active')) {
            // When activating, add visual enhancement
            $heading.css({
                'text-shadow': '2px 2px 8px rgba(0, 0, 0, 0.3)',
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        } else {
            // Reset styling
            $heading.css({
                'text-shadow': 'none',
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease'
            });
        }
    });
    
    // Register button click event
    $(document).on('click', '.btn-register', function(e) {
        e.preventDefault();
        
        // Traverse to find the event title
        var $event = $(this).closest('.event');
        var eventTitle = $event.find('h3').text();
        
        // Store event title in sessionStorage to pass between pages
        sessionStorage.setItem('selectedEvent', eventTitle);
        
        // Redirect to registration page
        window.location.href = 'registration.html';
    });
    
    // Check if we're on the registration page and retrieve event title
    if (window.location.pathname.includes('registration.html')) {
        var selectedEvent = sessionStorage.getItem('selectedEvent');
        if (selectedEvent) {
            $('#eventTitle').val(selectedEvent);
        }
    }
});
