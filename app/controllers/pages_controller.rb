class PagesController < ApplicationController
	def show
		render template: "pages/#{params[:test]}"
	end
end
