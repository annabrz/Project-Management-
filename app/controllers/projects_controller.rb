class ProjectsController < ApplicationController
    
    def index 
        projects = Project.all
        render json: projects, status: :ok
    end

    def show 
        project = Project.find(params[:id])
        render json: project, status: :ok
    end

    def create
        project = Project.create!(project_params)
        render json: project, status: :accepted
    end

    def update
        project = Project.find(params[:id])
        project.update(project_params)
        render json: project, status: :accepted
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    private

    def project_params
        params.permit(:project_title, :start_date, :end_date, :detail)
    end
end
