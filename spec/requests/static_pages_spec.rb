require 'spec_helper'

describe "StaticPages" do
  
  describe "Home Page" do
    
    it "should have default title" do
      visit "/"
      page.should have_selector('title',
                        :text => "koryko.ch | Making and Breaking Stuff Since 1981")
    end
    
  end
  
end
