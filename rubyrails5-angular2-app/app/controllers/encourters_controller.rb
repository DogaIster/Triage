class EncourtersController < ApplicationController
  before_action :set_encourter, only: [:show, :update, :destroy]

  # GET /encourters
  def index
    @encourters = Encourter.all

    render json: @encourters
  end

  # GET /encourters/1
  def show
    render json: @encourter
  end

  # POST /encourters
  def create
    @encourter = Encourter.new(encourter_params)

    if @encourter.save
      render json: @encourter, status: :created, location: @encourter
    else
      render json: @encourter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /encourters/1
  def update
    if @encourter.update(encourter_params)
      render json: @encourter
    else
      render json: @encourter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /encourters/1
  def destroy
    @encourter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_encourter
      @encourter = Encourter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def encourter_params
      params.require(:encourter).permit(:encourterID, :visitNumber, :admittedAt, :dischargedAt, :location, :room, :bed, :patientID)
    end
end
