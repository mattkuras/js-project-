class TripsController < ApplicationController
    def index 
        @trips = Trip.all
        render json: @trips.as_json(include: {activities: {only: [:name, :id]}})
    end

    def create
        @trip = Trip.new(trip_params)
    byebug
        if @trip.save
          render json: @trip#, status: :created, location: @trip
        else
          render json: @trip.errors#, status: :unprocessable_entity
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
        params.require(:trip).permit(:name, :rating, :season, :description, :photos, :user_id)
      end
end
