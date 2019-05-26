class V1::ItemsController < ApplicationController

  def index
    @items = Item.all

    render json: @items, status: :ok
  end

end

=begin

3rd party API
Sending Data to my backend.
gem 'rest-client' to make a request restful
ruby method find_or_create_by 


def index
 @cards = Card.all
end

def search #(post method) 
  term = params[:search] # what is being passed from the stringify

  url = "the 3rd party api url/name=#{term}"

  response = RestClient.get("https:/3rd party url?name=#{term}")
  data = JSON.parse(response)
  cards = data["cards"]

  created_cards = cards.map do |card|
    #create a card in my db
    Card.create(
      name: card["name"],
      image_url: card["imageUrl"],
      api_id: card["id"])
  end

  render json: created_cards

end 

// on rails routes the method for search will be POST 
// React 

search form input 

state = {
  search:""
}

fetch("http://localhost:3000/api/v1/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accepts": "application/json"
  },
  body: JSON.stringify(this.state)
}).then(res => res.json()) // should get the json from search (rails API)
.then(data => {
  this.Setstate({
    cards : data
  })
})
=end


