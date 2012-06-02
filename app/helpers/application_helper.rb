module ApplicationHelper
  
    def full_title(title)
      site_name = "koryko.ch"
      
      if title.empty?
        site_name
      else
        site_name + " | " + title
      end
    end
    
end

