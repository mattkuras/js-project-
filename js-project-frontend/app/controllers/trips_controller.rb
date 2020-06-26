class TripsController < ApplicationController
    def index 
        trips = Trip.all
        render json: trips, except: [:created_at, :updated_at]
    end
end
