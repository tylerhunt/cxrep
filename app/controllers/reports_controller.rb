class ReportsController < ApplicationController
  before_action :require_user

  inertia_share site: -> { site.as_json(only: :name) }
  inertia_share sitePath: -> { site_path(site) }

  def show
    report = site.reports.find(params[:id])

    render inertia: {
      report: { content: report.content.to_s },
      editReportPath: edit_site_report_path(site, report),
    }
  end

  def create
    case Reports::Create.new.call(site:, **report_params)
    in Success(report)
      redirect_to site_report_path(site, report)
    in Failure[:invalid, errors]
      redirect_to site_path(site), inertia: { errors: }
    end
  end

  def edit
    report = site.reports.find(params[:id])

    render inertia: {
      report: report.as_json(only: :content),
      reportPath: site_report_path(site, report),
    }
  end

  def update
    report = site.reports.find(params[:id])

    case Reports::Update.new.call(report:, **report_params)
    in Success(report)
      redirect_to site_report_path(site, report)
    in Failure[:invalid, errors]
      redirect_to edit_site_report_path(site, report), inertia: { errors: }
    end
  end

private

  def site = defined?(@current_user) ? @site : Site.find(params[:site_id])

  def report_params = params.permit(:content)
end
