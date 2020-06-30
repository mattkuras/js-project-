class TripsController < ApplicationController
    def index 
      if params[:search]
        @trips = Trip.search(params[:search])
      else
        @trips = Trip.all
        render json: @trips.as_json(include: {activities: {only: [:name, :id]}})
      end
    end

    def create
      
        @trip = current_user.trips.build(trip_params)

        if @trip.save
          render json: @trip
        else
          render json: @trip.errors
        end
      end


      def show
        
        @trip = Trip.all.find_by(id: params[:id]) 
        render json: @trip
      end


      def destroy
        @trip = Trip.all.find_by(id: params[:id])
        @trip.destroy
      end

      private 

      def trip_params
        params.require(:trip).permit(:name, :rating, :season, :description, :photos, :user_id, :search)
      end
end
